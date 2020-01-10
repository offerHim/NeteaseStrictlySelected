import React, { useEffect } from 'react';
import styles from './index.module.scss'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../util/useStore'

const Special: React.FC = () => {

  let store = useStore()
  let { special } = store

  useEffect(() => {
    special.special()
  })

  return useObserver(() => (
    <div className={styles.special_div}>
      {
       
      }
    </div>
  ))
}

export default Special;