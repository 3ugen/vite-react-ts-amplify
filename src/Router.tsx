import { Route, Routes } from 'react-router-dom'
import * as React from 'react'
import {
    Confidential,
    Index,
    Login,
    NotFound,
} from './pages'
import {
    QuestItemWrapper,
} from '@src/components'

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/confidential" element={<Confidential />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
