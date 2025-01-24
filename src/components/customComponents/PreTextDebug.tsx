'use client';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function PreTextDebug(json: any) {
  const [showJson, setShowJson] = useState(false)

  return (
    <>
      <Button onClick={() => setShowJson(!showJson)}>{showJson ? 'Hide JSON' : 'Show JSON'}</Button>
      {showJson && <pre>{JSON.stringify(json, null, 2)}</pre>}
    </>
  )
}
