import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  // Reading created form
  let schema = JSON.stringify(transformToSchema(designer.getCurrentTree()))
  localStorage.setItem(
    'formily-schema',
    schema
  )
  console.log(schema)
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}
