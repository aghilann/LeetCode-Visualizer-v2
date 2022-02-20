import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import { AuthenticationForm } from "../Input/SignUp";

export const SignUpModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Sign Up!">
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Sign Up</Button>
      </Group>
    </>
  );
};
