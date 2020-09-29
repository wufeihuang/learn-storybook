import React from 'react'
import { AddonPanel, ActionBar } from '@storybook/components'
import { addons, types } from '@storybook/addons'
import { useParameter, useStorybookState, useAddonState } from '@storybook/api'
import { styled } from '@storybook/theming'

console.log(addons, types)

const getUrl = (input) => {
  return typeof input === 'string' ? input : input.url
}

const Iframe = styled.iframe({
  width: '100%',
  height: '100%',
  border: '0 none',
})
const Img = styled.img({
  width: '100%',
  height: '100%',
  border: '0 none',
  objectFit: 'contain',
})

const Asset = ({ url }) => {
  if (!url) {
    return null
  }

  if (url.match(/\.(png|jpg|jpeg|svg|gif|tiff|anpg|webp)/)) {
    return <Img src={url} alt="" />
  }

  return <Iframe title={url} src={url} />
}

const Content = () => {
  const results = useParameter('assets', [])
  const [selected, setSelected] = useAddonState('my/design-addon', 0)
  const { storyId } = useStorybookState()

  console.log('storyId', storyId)
  console.log('results', results)
  console.log('useParameter()', useParameter())

  if (results.length === 0) return null

  const url = getUrl(results[selected]).replace('{id}', storyId)

  return (
    <>
      <Asset url={url} />
      {results.length > 1 ? (
        <ActionBar
          actionItems={results.map((i, index) => ({
            title: typeof i === 'string' ? `asset #${index + 1}` : i.name,
            onClick: () => setSelected(index),
          }))}
        />
      ) : null}
    </>
  )
}

addons.register('my/design-addon', () => {
  addons.add('design-addon/panel', {
    title: 'assets',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    ),
  })
})
