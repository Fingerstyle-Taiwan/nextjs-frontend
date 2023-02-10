import { Button, ButtonProps } from '@mantine/core'
import { IconBrandGoogle, IconBrandFacebook } from '@tabler/icons-react'

export function GoogleButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<IconBrandGoogle size={16} />}
      variant="default"
      color="gray"
      {...props}
    />
  )
}

export function FacebookButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<IconBrandFacebook size={16} />}
      sx={(theme) => ({
        backgroundColor: '#4267B2',
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.fn.darken('#4267B2', 0.1),
        },
      })}
      {...props}
    />
  )
}
