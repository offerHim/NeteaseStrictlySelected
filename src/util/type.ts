interface BannerType{
    id: string
    ad_position_id: number
    media_type: number
    name: string
    link: string
    image_url: string
    content: string
    end_time: number
    enabled: number
}
interface ChannelType{
    id: string
    name: string
    url: string
    icon_url: string
    sort_order: number
}
interface NewGoodsList{
    id: string
    name: string
    list_pic_url: string
    retail_price: number
}
interface HotGoodsList{
    id: string
    name: string
    list_pic_url: string
    retail_price: number
    goods_brief: string
}
interface BrandList{
    id: string
    name: string
    list_pic_url: string
    simple_desc: string
    pic_url: string
    sort_order: number
    is_show: number
    floor_price: number
    app_list_pic_url: string
    is_new: number
    new_pic_url: string
    new_sort_order: number
}
interface TopicList{
    id: string
    title: string
    content: string
    avatar: string
    item_pic_url: string
    subtitle: string
    topic_category_id: number
    price_info: number
    read_count: string
    scene_pic_url: string
    topic_template_id: number
    topic_tag_id: number
    sort_order: number
    is_show: number
}
interface CategoryList{
    id: string
    name: string,
    goodsList: NewGoodsList[]
}


//主页数据类型
export interface HomeType{
    banner: BannerType[],
    channel: ChannelType[],
    newGoodsList: NewGoodsList[],
    hotGoodsList: HotGoodsList[],
    brandList: BrandList[],
    topicList: TopicList[],
    categoryList: CategoryList[]
}

interface Attribute{
    name: string
    value: string
}
interface gallery{
    goods_id: string
    id: string
    img_desc: string
    img_url: string
    sort_order: string
}

interface issue{
    answer: string
    goods_id: string
    id: string
    question: string
}
interface productList{
    goods_id: string
    goods_number: string
    goods_sn: string
    goods_specification_ids: string
    id: string
    retail_price: string
}

//商品数据类型
export interface GooodsType{
    attribute:Attribute[],
    gallery:gallery[],
    issue:issue[],
    productList:productList[]
}


export interface XHRType{
    errno: number,
    errmsg: string,
    data?: object
}