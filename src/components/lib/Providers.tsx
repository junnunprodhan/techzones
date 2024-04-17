
'use client'
"use client"

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
      {children}
      </Provider>
    </NextUIProvider>
  )
}