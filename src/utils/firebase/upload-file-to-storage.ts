import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'

import { storage } from './firebase'

export const STORAGE_FOLDERS = {
  POLL_QUESTION_OPTIONS: 'poll-question-options',
  USER: 'user',
} as const

export const uploadFileToStorage = async (
  file: File,
  folderName: keyof typeof STORAGE_FOLDERS
) => {
  const storageFolder = STORAGE_FOLDERS[folderName]
  const randomId = nanoid()
  const fileName = `${storageFolder}/${randomId}_${file.name}`
  const storageRef = ref(storage, fileName)

  const snapshot = await uploadBytes(storageRef, file)

  return getDownloadURL(snapshot.ref)
}
