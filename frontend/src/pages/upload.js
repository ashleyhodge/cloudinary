import { useState } from 'react';


const Upload = () => {

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImg(previewSource);
  }

  const uploadImg = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      })
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type='file'
          name='image'
          onChange={handleFileInputChange}
          value={fileInputState}
          className='form-input'
        >
        </input>
        <button type='submit'>Submit</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt='chosen' />
      )}
    </div>
  )
}

export default Upload;