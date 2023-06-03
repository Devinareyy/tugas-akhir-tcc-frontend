'use client'

import React, { useEffect, useState } from 'react'

import Note from '@/models/note'
import Header from '@/components/header'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Button, { ButtonType } from '@/components/button'

export default function ViewNote({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<Note>()

  useEffect(() => {
    fetch(`/api/catatan?id=${params.id}`, { next: { revalidate: 0 } })
      .then(res => res.json())
      .then(json => {
        setNote(json.note)
      })
  }, [])

  const handleClick = async () => {
    const rawResponse = await fetch(`/api/delete?id=${params.id}`, {
      method: 'DELETE',
    })

    const response = await rawResponse.json()

    if (response.status != "SUCCESS") {
      alert("An error has occured when deleting")
      return
    }

    window.location.href = '/'
  }

  return (
    <React.Fragment>
      <Header title={note?.title ?? "Loading..."} backUrl="..">
        <Button type={ButtonType.danger} onClick={handleClick}>Hapus</Button>
      </Header>
      <ReactMarkdown>
        {note?.content ?? ""}
      </ReactMarkdown>
    </React.Fragment>
  )
}

