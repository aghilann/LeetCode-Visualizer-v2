import faker from "@faker-js/faker";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Avatar,
} from "@mantine/core";
import "./ContainerCard.css";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fullName = `${firstName} ${lastName}`;
const intials = firstName[0] + "." + lastName[0];

export function ContainerCard(props: any) {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div style={{ width: 340, margin: "auto" }} className=".m-96">
      {/*Div ClassName is not being applied*/}
      <Card shadow="sm" padding="lg" withBorder={true} radius="lg">
        <Card.Section>
          <Image src={faker.image.nature()} height={160} alt="Norway" />
        </Card.Section>
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Avatar color="cyan" radius="xl">
            {intials}
          </Avatar>
          <Text weight={500}>{fullName}</Text>
          {/* <Badge color="pink" variant="light">
            On Sale
          </Badge> */}
        </Group>
        <br></br>
        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {faker.lorem.paragraph(1)}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Contact me!
        </Button>
      </Card>
    </div>
  );
}
