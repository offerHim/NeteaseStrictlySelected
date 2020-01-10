import { observable, action } from 'mobx'
import { getCategoryList, getCatalog } from '../api/classify'


export default class ClassifyStore {
  @observable //分类页初始化信息获取
  categoryList: Array<any> = []

  @observable
  curIndex: number = 0

  @observable //分类id
  categoryId: string = "1005000"

  @observable //根据分类ID获取当前分类信息和子分类
  CatalogList: Array<any> = []

  @action
  async getCategoryList() {
    let res = await getCategoryList()
    this.categoryList = res.data.categoryList
  }

  @action
  async getCatalog(Id: string) {
    let res = await getCatalog(Id)
    this.CatalogList = res.data.currentCategory.subCategoryList
    console.log(res.data.currentCategory)
  }

  @action
  async Tab(index: number, Id: string) {
    this.curIndex = index
    this.categoryId = Id
    let res = await getCatalog(Id)
    this.CatalogList = res.data.currentCategory.subCategoryList
  }

}