'use client';

import { useFormStatus } from 'react-dom';
import ButtonLink, { ButtonAsButtonProps } from '../button-link';

interface Props extends ButtonAsButtonProps {
  text: string;
  pendingText: string;
}

export default function SubmitButton({ text, pendingText, ...rest }: Props) {
  const { pending } = useFormStatus();

  return (
    <ButtonLink disabled={pending} type="submit" {...rest}>
      {pending ? pendingText : text}
    </ButtonLink>
  );
}
