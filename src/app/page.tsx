import React from 'react'
import Link from 'next/link'
import { parseISO, formatDistanceToNow } from 'date-fns'

import Button from '@/components/button'
import ListItem from '@/components/listitem'
import Header from '@/components/header'
import Note from '@/models/note'

interface NotesData {
  notes: [Note]
}

export default async function Home(props: any) {
  const res = await fetch(`${process.env.API_BASE}/notes`, { next: { revalidate: 0 } })
  const data: NotesData = await res.json()
  const notes = data.notes

  return (
    <React.Fragment>
      <Header title="Catatan">
        <Link href="/catatan">
          <Button>Buat Catatan Baru</Button>
        </Link>
      </Header>
      <div>
        {
          notes.map((note: Note) => {
            const createdAt = note.created_at
            const subtitle = `Created at ${createdAt}`
            return <ListItem 
              key={note.id}
              title={note.title ?? ""} 
              subtitle={subtitle} 
              href={`./catatan/${note.id}`} />
          })
        }
      </div>
    </React.Fragment>
  )
}
