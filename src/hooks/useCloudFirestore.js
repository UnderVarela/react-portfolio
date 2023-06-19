import { useEffect, useState } from 'react'
import { getDocuments } from '../helpers/cloud-firestore'

export function useCloudFirestore (uid) {
  const [documents, setDocuments] = useState([])

  const getDocs = async () => {
    try {
      const data = await getDocuments(uid)
      setDocuments(data)
    } catch (error) {
      console.log(`%cError: ${error.message}`, 'background-color: black; color: yellow')
    }
  }

  useEffect(() => {
    getDocs()
  }, [])

  return {
    docs: structuredClone(documents)
  }
}
