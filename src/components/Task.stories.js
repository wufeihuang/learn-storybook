import React from 'react'
import Task from './Task'

export default {
  component: Task,
  title: 'Task',
  parameters: {
    assets: [
      'https://tse4-mm.cn.bing.net/th/id/OIP.f5Yv_VHiT4RJNqMq-OmcvAHaLH?w=192&h=288&c=7&o=5&dpr=2&pid=1.7',
      'https://tse3-mm.cn.bing.net/th/id/OIP.3IPd0dBglHmKHVcD4IqS4QHaKH?w=192&h=263&c=7&o=5&dpr=2&pid=1.7',
      'https://tse3-mm.cn.bing.net/th/id/OIP.aOrh_2yfWtR46VkRiNL03AHaKc?w=192&h=271&c=7&o=5&dpr=2&pid=1.7',
    ],
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

const Template = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'learn storybook',
    state: 'TASK_INBOX',
    updatedAt: new Date(2020, 9, 24, 1, 30)
  }
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}