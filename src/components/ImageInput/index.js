import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import { Container } from './styles';
import api from '~/services/api';

export default function ImageInput() {
  const { defaultValue, registerField } = useField('File');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="File">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <>
            <MdPhotoCamera />
            <text>Selecionar Imagem</text>
          </>
        )}

        <input
          type="file"
          id="File"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
