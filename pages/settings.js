import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useCurrentUser } from '@/hooks/index';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon, StarIcon } from '@chakra-ui/icons'
import {
  Stack,
  FormControl,
  Editable,
  VStack,
  Textarea,
  Image,
  EditableInput,
  EditablePreview,
  FormLabel,
  Center,
  useColorMode,
  Text,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);
  const nameRef = useRef();
  const bioRef = useRef();
  const profilePictureRef = useRef();
  const [msg, setMsg] = useState({ message: '', isError: false });
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  useEffect(() => {
    nameRef.current.value = user.name;
    bioRef.current.value = user.bio;
  }, [user]);

  function handleToggleOld(e) {
    e.preventDefault();
    setShowOldPass(!showOldPass);
  }

  function handleToggleNew(e) {
    e.preventDefault();
    setShowNewPass(!showNewPass);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdating) return;
    setIsUpdating(true);
    const formData = new FormData();
    if (profilePictureRef.current.files[0]) { formData.append('profilePicture', profilePictureRef.current.files[0]); }
    formData.append('name', nameRef.current.value);
    formData.append('bio', bioRef.current.value);
    const res = await fetch('/api/user', {
      method: 'PATCH',
      body: formData,
    });
    if (res.status === 200) {
      const userData = await res.json();
      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: 'Profile updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
    setIsUpdating(false);
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    e.currentTarget.oldPassword.value = '';
    e.currentTarget.newPassword.value = '';

    const res = await fetch('/api/user/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Password updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  async function sendVerificationEmail() {
    const res = await fetch('/api/user/email/verify', {
      method: 'POST',
    });
    if (res.status === 200) {
      setMsg({ message: 'An email has been sent to your mailbox' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>
        <h2>Edit Profile</h2>
        {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p> : null}
  
      <form onSubmit={handleSubmit}>
      {!user.emailVerified ? (
        <p>
          Your email has not been verify.
          {' '}
          {/* eslint-disable-next-line */}
            <a role="button" onClick={sendVerificationEmail}>
              Send verification email
            </a>
        </p>
      ) : null}
        <Stack spacing={4}>
        <FormControl isRequired>
            <InputGroup>
              <InputLeftElement>
                <StarIcon />
              </InputLeftElement>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                ref={nameRef}
              />
            </InputGroup>
          </FormControl>
        
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement>
                <EmailIcon />
              </InputLeftElement>
              <Input
                id="bio"
                type="text"
                name="bio"
                placeholder="Bio"
                ref={bioRef}
              />
            </InputGroup>
          </FormControl>
          <Divider />
          <Button variantColor="blue" type="submit" shadow="md">
            Save
          </Button>
        </Stack>
      </form>

      <form onSubmit={handleSubmitPasswordChange}>
          <FormControl isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              id="oldPassword"
              name="oldPassword"
              type={showOldPass ? "text" : "password"}
              placeholder="Old Password"
              //ref={newpassword}
            />
            <InputRightElement>
              <IconButton
                icon={showOldPass ? <ViewOffIcon/> : <ViewIcon />}
                variant="ghost"
                size="sm"
                onClick={handleToggleOld}
                title={`${showOldPass ? "Hide" : "Show"} Password`}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              id="newPassword"
              name="newPassword"
              type={showNewPass ? "text" : "password"}
              placeholder="New Password"
            />
            <InputRightElement>
              <IconButton
                icon={showNewPass ? <ViewOffIcon/> : <ViewIcon />}
                variant="ghost"
                size="sm"
                onClick={handleToggleNew}
                title={`${showNewPass ? "Hide" : "Show"} Password`}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Divider />
          <Button variantColor="blue" type="submit" shadow="md">
            Change Password
          </Button>
        </form>
    </div>
  );
};

const SettingPage = () => {
  const [user] = useCurrentUser();
  if (!user) {
    return (
      <>
        <p>Please sign in</p>
      </>
    );
  }
  return (
    <>
      <h1>Settings</h1>
      <ProfileSection />
    </>
  );
};
export default SettingPage;
