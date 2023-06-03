'use client'

import React, { useState } from 'react'

import Header from '@/components/header'
import Button, {ButtonType} from '@/components/button'
import Note from '@/models/note'
import { ChangeEvent } from 'react'

export default function NoteForm(props: any) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) {
      alert("Mohon isi semua form yang disediakan!")
      return
    }

    try {
      const rawResponse = await fetch('/api/catatan', {
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
        }),
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const response = await rawResponse.json()

      if (response.status != "SUCCESS") {
        alert("Gagal membuat catatan!")
        return
      }

      const note: Note = response.note
      window.location.href = `/catatan/${note.id}`
    } catch (e) {
      alert(e)
    }
  }

  return (
    <React.Fragment>
      <Header title={props.note ? "Ubah Catatan" : "Catatan Baru"} backUrl="..">
        {props.note && <Button type={ButtonType.danger} className="material-symbols-outlined">delete</Button>}
        <Button onClick={handleSubmit}>Simpan</Button>
      </Header>
      <div>
        <form className="flex flex-col gap-2 h-full text-gray-600">
          <input 
            name="title"
            type="text" 
            className="w-full p-2 border-2 border-gray-300 rounded-md" 
            placeholder="Judul" 
            required
            minLength={1}
            maxLength={100}
            value={props.note?.title}
            onChange={handleInput}/>
          <textarea 
            name="content"
            className="w-full p-2 border-2 border-gray-300 rounded-md h-64"
            placeholder="Isi Catatan"
            minLength={1}
            onChange={handleInput}
            required>
              {props.note?.content}
          </textarea>
        </form>
      </div>
    </React.Fragment>
  )
}

