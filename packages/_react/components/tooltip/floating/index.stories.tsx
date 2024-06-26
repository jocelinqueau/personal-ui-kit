import { StoryObj } from '@storybook/react';
import Tooltip from '.'
import { forwardRef } from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default {
  title: "Tooltip/Floating",
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

const _Trigger = forwardRef<any, any>((props, forwardedRef) => (
  <button className="rounded-full shadow-lg p-2" {...props} ref={forwardedRef}>
    <ChatBubbleIcon width="16" height="16" />
  </button>
));

export const Primary: Story = {
  args: {
    trigger: <_Trigger />,
    content: <div className="p-2 bg-white rounded-sm shadow-lg">
      <p>This is a chat bubble icon</p>
    </div>,
  },
};
