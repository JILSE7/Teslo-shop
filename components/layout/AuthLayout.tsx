import { Box } from '@mui/system';
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

interface IProps {
    title: string;
    children: ReactNode;
}

const AuthLayout:FC<IProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <main>
        <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 20px)">
            {
                children
            }
        </Box>
      </main>
    </>
  )
}

export default AuthLayout