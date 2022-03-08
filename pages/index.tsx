import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)

  let number: number
  let boolean: boolean
  let string: string
  let any: any
  let n: number[] = [1, 2, 3]
  let a: any[] = [1, true, 'a', false]

  enum Colors { Red, Blue, Green }

  // type assertion
  let message
  message = 'abc'
  let endWithC = (message as string).endsWith('c')

  // interfaces
  interface Message {
    x: string,
    y: string
  }

  let setMessage = (messaging: Message) => {
    console.log(messaging)
  }

  setMessage({ x: 'hello', y: 'hello' })

  // classes
  class Messaging {

    constructor(public a?: string, public b?: string) {

    }

    message() {
      console.log("x: " + this.a + " " + "y: " + this.b )
    }
  }

  class Count {
    increment() {
      setCount(count + 1)
    }
    decrement() {
      setCount(count - 1)
      if(count == 0) {
        setCount(0)
      }
    }
  }

  const c = new Count()
  const m = new Messaging()
  m.message()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button onClick={() => c.increment()}>+</Button>
      <Text>{count}</Text>
      <Button onClick={() => c.decrement()}>-</Button>
      
    </div>
  )
}

export default Home
