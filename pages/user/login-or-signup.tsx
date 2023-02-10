import { useToggle, upperFirst, useViewportSize } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Center,
  Modal,
} from '@mantine/core'
import { GoogleLogin } from '@react-oauth/google'
import PrivacyModal from '../../components/Modal/Privacy'

export default function AuthenticationForm(props: PaperProps) {
  const { height, width } = useViewportSize()
  const [opened, setOpened] = useState(false)
  const [type, toggle] = useToggle(['登入', '註冊'])
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false,
    },

    validate: {
      name: (value) => {
        if (type === '註冊') {
          return value.length < 2 ? '名字至少兩個字元' : null
        }
      },
      email: (val) => (/^\S+@\S+$/.test(val) ? null : '不正確的信箱格式'),
      password: (val) =>
        val.length <= 6 ? '密碼至少包含六個以上的字元' : null,
      terms: (val) => {
        if (type === '註冊') {
          return val == false ? '必須同意網站服務政策與隱私權條款' : null
        }
      },
    },
  })

  return (
    <Center style={{ width: width, height: height }}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          歡迎來到 Fingerstyle Taiwan, {type}帳號
        </Text>

        <Group grow mb="md" mt="md">
          <Center>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
              }}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </Center>
        </Group>

        <Divider label="或是以信箱繼續" labelPosition="center" my="lg" />

        <form
          onSubmit={form.onSubmit(() => {
            if (type === '註冊') {
              console.log('sign up')
            } else {
              console.log('login')
            }
          })}
        >
          <Stack>
            {type === '註冊' && (
              <TextInput
                required
                label="名字"
                placeholder="王小明"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                error={form.errors.name && '名字至少兩個字元'}
              />
            )}

            <TextInput
              required
              label="信箱"
              placeholder="hello@example.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && '不正確的信箱格式'}
            />

            <PasswordInput
              required
              label="密碼"
              placeholder="一個安全的密碼"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={form.errors.password && '密碼至少包含六個以上的字元'}
            />

            {type === '註冊' && (
              <Checkbox
                label={
                  <>
                    我同意{' '}
                    <Anchor size="sm" onClick={() => setOpened(true)}>
                      網站服務政策與隱私權條款
                    </Anchor>
                  </>
                }
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue('terms', event.currentTarget.checked)
                }
                error={form.errors.terms && '必須同意網站服務政策與隱私權條款'}
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === '註冊'
                ? '已經有帳號了嗎? 登入'
                : '還未擁有帳號嗎? 註冊'}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
      <Modal
        size="xl"
        overflow="inside"
        opened={opened}
        onClose={() => setOpened(false)}
        title="網站隱私權政策"
      >
        <PrivacyModal />
        <Group position="center">
          <Button onClick={() => setOpened(false)}>我知道了</Button>
        </Group>
      </Modal>
    </Center>
  )
}
