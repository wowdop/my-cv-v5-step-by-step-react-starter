import { Fragment, useEffect, useState } from 'react'
import { Button, Header, Reset } from '..'
import { get } from 'axios'

const MyCV = () => {
  const [colectia, modificaColectia] = useState([])

  useEffect(() => {
    const ggg = async () => {
      const { data } = await get(
        'https://api.github.com/users/marianzburlea/repos'
      )
      modificaColectia(data)
    }

    ggg()
  }, [])

  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Button color="funGreen">
        <span>O</span>
        Download
      </Button>
      <ul>
        {colectia.map(({ language, description, id }) => (
          <Fragment key={id}>
            <li>{description}</li>
            <li>{language}</li>
            <li>{id}</li>
            <hr />
          </Fragment>
        ))}
      </ul>
      <Header>Tech I love to work with</Header>
      <Button color="milanoRed">Subscribe</Button>
      <Header font={16} color="funOrange">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Header font={16} color="funBlue">
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Button color="milanoRed">Let`s chat!</Button>
      <Header>Meet me where you are</Header>
      <Button color="funGreen">Bonus</Button>
      <p>Neata, ne trezim?</p>
    </div>
  )
}

export default MyCV
