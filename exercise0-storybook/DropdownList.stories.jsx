import React from 'react';

import DropdownList from 'components/dropdown-list';

export default {
  title: 'Components/DropdownList',
  component: DropdownList,
};

const Template = (args) => <DropdownList {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultItemText: 'Pick Something',
  items: ['One Option', 'Baton Rogue'],
};
