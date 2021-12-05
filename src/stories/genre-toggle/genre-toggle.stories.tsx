import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GenreToggle } from './genre-toggle';

export default {
  title: 'Example/Genre Toggle',
  component: GenreToggle,
} as ComponentMeta<typeof GenreToggle>;

const Template: ComponentStory<typeof GenreToggle> = (args) => <GenreToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  genre: 'all',
};

export const PreselectedGenre = Template.bind({});
PreselectedGenre.args = {
  genre: 'comedy',
};
