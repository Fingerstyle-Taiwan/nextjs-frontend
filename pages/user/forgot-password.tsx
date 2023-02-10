import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { IconArrowLeft } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

export default function ForgotPassword() {
  const { classes } = useStyles()
  const { height, width } = useViewportSize()

  return (
    <Center style={{ width: width, height: height }}>
      <Container size={720} my={30}>
        <Title className={classes.title} align="center">
          忘記密碼?
        </Title>
        <Text color="dimmed" size="sm" align="center">
          輸入信箱以獲得重設密碼連結
        </Text>

        <Paper withBorder shadow="md" p="xl" radius="md" mt="md">
          <TextInput label="信箱" placeholder="example@gmail.com" required />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor
              color="dimmed"
              size="sm"
              className={classes.control}
              href="login-or-signup"
            >
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>回到登入頁</Box>
              </Center>
            </Anchor>
            <Button className={classes.control}>重設密碼</Button>
          </Group>
        </Paper>
      </Container>
    </Center>
  )
}
