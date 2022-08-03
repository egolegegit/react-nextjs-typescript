import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '../../src/pages';

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

// @ts-ignore
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Base = Template.bind({});
