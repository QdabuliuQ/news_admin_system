export class InitData { 
  height: number = 0
  path: string = ''
  activeIndex: string = ''
  menuList: {
    name: string,
    index: string,
    icon: any, 
    list: {
      name: string,
      index: string,
      path: string
      root?: boolean
    }[]
  }[] = [
    {
      name: "用户信息",
      index: "1",
      icon:'User',
      list: [
        {
          name: "普通用户",
          index: "1-1",
          path: "/client",
        },
        {
          name: "普通管理员",
          index: "1-2",
          path: "/administrator",
          root: true
        },
      ],
    },
    {
      name: "文章管理",
      index: "2",
      icon: "Tickets",
      list: [
        {
          name: "文章分类",
          index: "2-1",
          path: "/articleCate",
        },
        {
          name: "所有文章",
          index: "2-2",
          path: "/articleList",
        },
        {
          name: "文章举报",
          index: "2-3",
          path: "/articleReport",
        },
      ],
    },
    {
      name: "操作日志",
      index: "3",
      icon: "Place",
      list: [
        {
          name: "超级管理员日志",
          index: "3-1",
          path: "/supAdminLog",
          root: true
        },
      ],
    },
    {
      name: "公告管理",
      index: "4",
      icon: "DataBoard",
      list: [
        {
          name: "后台公告",
          index: "4-1",
          path: "/backNotice",
          root: true
        },
        {
          name: "前台公告",
          index: "4-2",
          path: "/receNotice",
        },
      ],
    },
    {
      name: "评论管理",
      index: "5",
      icon: "ChatDotRound",
      list: [
        {
          name: "文章评论",
          index: "5-1",
          path: "/commentList",
        },
        {
          name: "视频评论",
          index: "5-2",
          path: "/v_commentList",
        },
        {
          name: "动态评论",
          index: "5-3",
          path: "/e_commentList",
        },
        {
          name: "评论举报",
          index: "5-4",
          path: "/commentReport",
        },
      ],
    },
    {
      name: "视频管理",
      index: "6",
      icon: "VideoCamera",
      list: [
        {
          name: "视频列表",
          index: "6-1",
          path: "/videoList",
        },
        {
          name: "视频举报",
          index: "6-2",
          path: "/videoReport",
        },
      ],
    },
    {
      name: "动态管理",
      index: "7",
      icon: "Message",
      list: [
        {
          name: "动态列表",
          index: "7-1",
          path: "/eventView",
        },
        {
          name: "动态举报",
          index: "7-2",
          path: "/eventReport",
        },
      ],
    },
    {
      name: "消息管理",
      index: "8",
      icon: "ChatLineSquare",
      list: [
        {
          name: "消息列表",
          index: "8-1",
          path: "/messageView",
        },
        {
          name: "消息举报",
          index: "8-2",
          path: "/messageReport",
        },
      ],
    },
  ]
}