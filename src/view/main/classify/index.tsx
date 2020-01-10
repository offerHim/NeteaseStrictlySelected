import React, { useEffect } from 'react'
import useStore from '../../../util/useStore'
import { useObserver } from 'mobx-react-lite';
import { useHistory, Link } from 'react-router-dom'
import styles from './index.module.scss'

const App: React.FC = () => {
  //引入store
  let store = useStore();

  let { login } = store
  let history = useHistory();

  useEffect(() => {
    store.classify.getCategoryList()
  }, [])

  useEffect(() => {
    store.classify.getCatalog(store.classify.categoryId)
  }, [])

  return useObserver(() => (
    <div className={styles.classify}>
      <div className={styles.searchBox}>
        <div className={styles.searchInput}>
          <span>搜索商品，共239款好物</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          {
            store.classify.categoryList.map((item, index) => {
              return <div className={`${styles.leftItem} ${index === store.classify.curIndex ? styles.active : ""}`} key={index} onClick={() => store.classify.Tab(index, item.id)}>
                {item.name}
              </div>
            })
          }
        </div>
        <div className={styles.right}>
          {
            store.classify.categoryList.map((item, index) => {
              return index === store.classify.curIndex ? <div className={styles.right_div} key={index}>
                <div className={styles.top} style={{ backgroundImage: `url(${item.wap_banner_url})` }}>
                  {item.front_desc}
                </div>
                <div className={styles.title}>
                  -- {item.name}分类 --
                </div>
                <div className={styles.cbottom}>
                  {
                    store.classify.CatalogList.map((item, index) => {
                      return <Link key={index} onClick={} to={{pathname:"/detail",state:item.id}}>
                        <dl>
                          <dt><img src={item.wap_banner_url} alt="" /></dt>
                          <dd>{item.name}</dd>
                        </dl>
                      </Link>
                    })
                  }
                </div>
              </div> : ""
            })
          }
        </div>
      </div>
    </div>
  ))
}

export default App;
