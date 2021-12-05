import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sorter } from './sorter';

export default {
  title: 'Example/Sorter',
  component: Sorter,
} as ComponentMeta<typeof Sorter>;

const Template: ComponentStory<typeof Sorter> = (args) => <Sorter {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortBy: 'release_date'
}

export const ByTitle = Template.bind({});
ByTitle.args = {
  sortBy: 'title',
};

export const ByRating = Template.bind({});
ByRating.args = {
  sortBy: 'vote_average',
};
