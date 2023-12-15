// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  toEscapedSelector,
} from 'unocss'
// import transformerDirectives from '@unocss/transformer-directives'

const remRE = /(-?[\.\d]+)rem/g
const remFactor = 1
function calcDistanceBySize(size) {
  const value = size.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || ''
  const unit = size.slice(value.length)
  return Number(value) / remFactor + (unit ? unit : 'rem')
}

/** 从十六进制色值获取颜色字符串 */
function getColorStrFromHexStr(hexStr) {
  if (hexStr.length <= 7) {
    return hexStr
  } else {
    const r = parseInt(hexStr.slice(1, 3), 16);
    const g = parseInt(hexStr.slice(3, 5), 16);
    const b = parseInt(hexStr.slice(5, 7), 16);
    const a = parseInt(hexStr.slice(7, 9)) / 100;
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
}

/** 从 border 配置字符串获取 border 配置字符串 */
function getBorderConfigStr(s1) {
  return s1.split(',').map((item, index) => {
    if (index === 0) return `${calcDistanceBySize(item)}`;          // 1px
    else if (index === 1) return item;                              // solid
    else if (index === 2) return `${getColorStrFromHexStr(item)}`;  // #000000
  }).join(' ')
}

export default defineConfig({
  // ...UnoCSS options
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  theme: {
    fontFamily: {
      Poppins: 'Poppins, Poppins-Medium',
    },
    animation: {
      keyframes: {
        helloworld: `{
          0% {
            transform: translate(-14%, -50%);
          }
          50% {
            transform: translate(-86%, -50%);
          }
          100% {
            transform: translate(-14%, -50%);
          }
        }`,
      },
      durations: {
        helloworld: '5s',
      },
      timingFns: {
        helloworld: 'linear',
      },
      counts: {
        helloworld: 'infinite',
      },
      // helloworld: 'helloworld 5s infinite linear',
    },
    fontSize: {
      // base: '10rem'
    },
    colors: {
      main: {
        rankReward: '#FF1D83',
      },
    },
  },
  shortcuts: [
    // ['btn', 'px0.4 py0.1 rounded-md whitespace-nowrap bg-gray/20 hover:bg-gray/30 font-500'],
    ['icon-btn', 'p3 rounded-md'],

    ['whfull', 'w-full h-full'],
    ['wh-full', 'w-full h-full'],
    ['wh-screen', 'w-screen h-screen'],

    // position
    ['por', 'relative'],
    ['poa', 'absolute'],
    ['pof', 'fixed'],
    ['pos', 'sticky'],

    // position layout
    ['poaxc', 'poa left-1/2 -translate-x-1/2'],
    ['poayc', 'poa top-1/2 -translate-y-1/2'],
    ['poacc', 'poaxc poayc'],

    // flex layout
    ['frcc', 'flex flex-row justify-center items-center'],
    ['fccc', 'flex flex-col justify-center items-center'],

    ['fcsc', 'flex flex-col justify-start items-center'],
    ['frsc', 'flex flex-row justify-start items-center'],
    ['frenc', 'flex flex-row justify-end items-center'],
    ['frevc', 'flex flex-row justify-evenly items-center'],
    ['frevs', 'flex flex-row justify-evenly items-start'],
    ['fwss', 'flex flex-wrap justify-start items-start'],
    ['fwsc', 'flex flex-wrap justify-start items-center'],
    ['fwcs', 'flex flex-wrap justify-center items-start'],
    ['fwcc', 'flex flex-wrap justify-center items-center'],

    ['frc', 'flex flex-row items-center'],
    ['frs', 'flex flex-row items-start'],
    ['fcs', 'flex flex-col items-start'],
    ['fcc', 'flex flex-col items-center'],
    ['fce', 'flex flex-col items-end'],

    ['root', 'w-screen fcsc'],

    // 超出文本显示...
    ['overflow-dot', 'whitespace-nowrap overflow-hidden text-ellipsis'],

    // transition
    ['trans', 'transition-all-350 ease-linear'],
    [/^trans-([\.\d]+)$/, ([, s1]) => { return `transition-all-${s1} ease-linear` },],

    // 正方形 square-1
    [/^square-(.*)$/, ([, s1]) => { return `w-${s1} h-${s1}` },],
    [/^wh-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([, s1]) => { return `w-${s1} h-${s1}` },],

    // 圆形 circle-1
    [/^circle-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([, s1]) => { return `square-${s1} border-rd-[50%]` },], //  rounded-full

    // font-size
    [/^fs-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'font-size-' + calcDistanceBySize(s1) },],

    // 颜色
    [/^cor-\[(.+)\]$/, ([, s1]) => { return `c-#${s1}` },], // cor-[FC55A9]>{{}} 会有末尾为>问题

    // top
    [/^t-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'top-' + calcDistanceBySize(s1) },],
    // top
    [/^t--([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'top--' + calcDistanceBySize(s1) },],
    // right
    [/^r-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'right-' + calcDistanceBySize(s1) },],
    // right
    [/^r--([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'right--' + calcDistanceBySize(s1) },],
    // bottom
    [/^b-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'bottom-' + calcDistanceBySize(s1) },],
    // bottom
    [/^b--([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'bottom--' + calcDistanceBySize(s1) },],
    // left
    [/^l-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'left-' + calcDistanceBySize(s1) },],
    // left: -1px
    [/^l--([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'left--' + calcDistanceBySize(s1) },],

    // top-left
    [/^tl-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return `top-${s1} left-${s1}` },],
    // top-right
    [/^tr-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return `top-${s1} right-${s1}` },],

    // right-bottom
    [/^rb-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return `right-${s1} bottom-${s1}` },],

    // border-width
    // [/^bw-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/, ([_, s1]) => { return 'border-width-' + calcDistanceBySize(s1) },],
    // border-radius
    // [/^br-([\.\d]+)$/, ([_, s1]) => { return 'border-rd-[' + s1 + '%]' },],
  ],
  rules: [
    // 这里可以自定义配置!!!!!!!![rules 只可以写 CSS 属性/值]
    //----------------------- color -----------------------
    // color: #00000080 c-#00000080
    [/^c-(.*)$/, ([, s1]) => { return { color: `${getColorStrFromHexStr(s1)}`, } },],

    //----------------------- position -----------------------
    // top: 50% t-p-50
    [/^t-p-([\.\d]+)$/, ([_, s1]) => { return { top: `${s1}%` } },],
    // right: 50% r-p-50
    [/^r-p-([\.\d]+)$/, ([_, s1]) => { return { right: `${s1}%` } },],
    // bottom: 50% b-p-50
    [/^b-p-([\.\d]+)$/, ([_, s1]) => { return { bottom: `${s1}%` } },],
    // left: 50% l-p-50
    [/^l-p-([\.\d]+)$/, ([_, s1]) => { return { left: `${s1}%` } },],

    //----------------------- bg -----------------------
    [/^bgf-(.*)$/, ([, s1]) => { return { background: `url(@/${s1})`, 'background-size': '100% 100%', } },],
    [/^bgr-(.*)$/, ([, s1]) => { return { background: `url(@/${s1})`, } },],
    [/^bgc-(.*)$/, ([, s1]) => { return { 'background-color': `${getColorStrFromHexStr(s1)}`, } },],
    ['bg-full', { 'background-size': '100% 100%' }],
    [/^bg-gradient-to-(\d+)deg$/, ([, s1]) => {
      return {
        '--un-gradient-shape': `${s1}deg`,
        '--un-gradient': 'var(--un-gradient-shape), var(--un-gradient-stops)',
        'background-image': 'linear-gradient(var(--un-gradient))',
      }
    }],
    [/^bg-linear-gradient-(.*)$/, ([, s1]) => {
      const arr = s1.split(',')
      const resultArr: any[] = []
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (i === 0) {
          if (item.indexOf('-') !== -1) {
            // to-[right|left|top|bottom] → to right
            resultArr.push(item.split('-').join(' '))
          } else if (item.indexOf('deg') === -1) {
            // 180 → 180deg
            resultArr.push(`${item}deg`)
          }
        } else {
          if (item.startsWith('#')) {
            // #000000 → rgb(0, 0, 0) | #00000020-20 → rgba(0, 0, 0, 0.2) 20%
            const itemArr = item.split('-')
            if (itemArr.length === 1) {
              resultArr.push(`${getColorStrFromHexStr(item)}`)
            } else {
              resultArr.push(`${getColorStrFromHexStr(itemArr[0])} ${itemArr[1]}%`)
            }
          }
        }
      }
      return {
        'background-image': `linear-gradient(${resultArr.join(',')})`,
      }
    }],
    [/^bg-radial-gradient-(.*)$/, ([, s1]) => {
      const resultArr: any[] = []
      const arr = s1.split('/')
      // console.log('arr', arr);
      for (let i = 0; i < arr.length; i++) {
        const itemArr = arr[i].split(',')
        if (itemArr.length === 1) {
          // #182336
          resultArr.push(`${getColorStrFromHexStr(itemArr[0])}`)
        } else {
          // radial-gradient
          const itemResultArr: any[] = []
          for (let i = 0; i < itemArr.length; i++) {
            let item = itemArr[i]
            if (i === 0) {
              if (item.indexOf('-') !== -1) {
                // circle-at-60-60 → circle at 60% 60% | circle-at-60px-60px → circle at 60px 60px
                const itemArr = item.split('-')
                // remove g
                // itemArr.shift()
                // if is number, add %
                for (let i = 0; i < itemArr.length; i++) {
                  if (!isNaN(Number(itemArr[i]))) {
                    itemArr[i] = `${itemArr[i]}%`
                  }
                }
                itemResultArr.push(itemArr.join(' '))
              }
            } else {
              if (item.startsWith('#')) {
                // #182336 → rgb(24, 35, 54) | #18233620 → rgba(24, 35, 54, 0.2)
                itemResultArr.push(`${getColorStrFromHexStr(item)}`)
              } else if (item.startsWith('transparent')) {
                // transparent-20 → transparent 20%
                const itemArr = item.split('-')
                itemResultArr.push(`${itemArr[0]} ${itemArr[1]}%`)
              }
            }
          }
          resultArr.push(`radial-gradient(${itemResultArr.join(',')})`)
        }
      }
      // console.log('background:' + `${resultArr.join(',')}}`);
      return {
        'background': `${resultArr.join(',')}}`,
      }
    }],

    //----------------------- border -----------------------
    [/^bdrfull-(.*)$/, ([, s1]) => {
      const arr = s1.split('/')
      const resultStr = arr[1].split(',').map((item, index) => {
        if (index === 0) return `${calcDistanceBySize(item)}`;          // 1px
        else if (index === 1) return item;                              // solid
        else if (index === 2) return `${getColorStrFromHexStr(item)}`;  // #000000
      }).join(' ')
      return { 'border': `${resultStr}`, }
    },],  // 1px solid #000000
    [/^bdr-t-(.*)$/, ([, s1]) => { return { 'border-top': `${getBorderConfigStr(s1)}`, } },],        // border-top
    [/^bdr-r-(.*)$/, ([, s1]) => { return { 'border-right': `${getBorderConfigStr(s1)}`, } },],      // border-right
    [/^bdr-b-(.*)$/, ([, s1]) => { return { 'border-bottom': `${getBorderConfigStr(s1)}`, } },],     // border-bottom
    [/^bdr-l-(.*)$/, ([, s1]) => { return { 'border-left': `${getBorderConfigStr(s1)}`, } },],       // border-left 
    [/^bdr-c-(.*)$/, ([, s1]) => { return { 'border-color': `${getColorStrFromHexStr(s1)}`, } },],
    [/^bdr-tc-(.*)$/, ([, s1]) => { return { 'border-top-color': `${getColorStrFromHexStr(s1)}`, } },],
    [/^bdr-rc-(.*)$/, ([, s1]) => { return { 'border-right-color': `${getColorStrFromHexStr(s1)}`, } },],
    [/^bdr-bc-(.*)$/, ([, s1]) => { return { 'border-bottom-color': `${getColorStrFromHexStr(s1)}`, } },],
    [/^bdr-lc-(.*)$/, ([, s1]) => { return { 'border-left-color': `${getColorStrFromHexStr(s1)}`, } },],
    [/^bdr-s-(.*)$/, ([, s1]) => { return { 'border-style': `${s1}`, } },],
    [/^bdr-w-(.*)$/, ([, s1]) => { return { 'border-width': `${calcDistanceBySize(s1)}`, } },],

    //----------------------- border-radius -----------------------
    [/^bdr-rd-(.*)$/, ([, s1]) => {
      const itemArr = s1.split(',')
      if (itemArr.length === 1) {
        // is number, 10 → 10%
        if (!isNaN(Number(itemArr[0]))) {
          return { 'border-radius': `${itemArr[0]}%`, }
        } else {
          return { 'border-radius': `${calcDistanceBySize(itemArr[0])}`, }
        }
      } else {
        return { 'border-radius': `${s1.split(',').map(item => { return `${calcDistanceBySize(item)}` }).join(' ')}`, }
      }
    },],
    //----------------------- scrollbar -----------------------
    [
      // scrollbar/scrollbar-thumb  width
      /^(sb|sbt)-w-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/,
      ([, s1, s2], { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector)
        return `
          ${selector}::-webkit-scrollbar${s1 === 'sbt' ? '-thumb' : ''} {
            width: ${calcDistanceBySize(s2)};
          }`
      }
    ],
    [
      // scrollbar/scrollbar-thumb  border-radius
      /^(sb|sbt)-rd-([\.\d]+|[\.\d]+px|[\.\d]+rem)$/,
      ([, s1, s2], { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector)
        return `
          ${selector}::-webkit-scrollbar${s1 === 'sbt' ? '-thumb' : ''} {
            border-radius: ${calcDistanceBySize(s2)};
          }`
      }
    ],
    [
      // scrollbar/scrollbar-thumb  background-color
      /^(sb|sbt)-bgc-(.*)$/,
      ([, s1, s2], { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector)
        return `
          ${selector}::-webkit-scrollbar${s1 === 'sbt' ? '-thumb' : ''} {
            background-color: ${getColorStrFromHexStr(s2)};
          }`
      }
    ],

    //----------------------- shadow -----------------------
    [/^shadow-(.*)$/, ([, s1]) => {
      const arr = s1.split('/')
      const resultArr: any[] = []
      for (let i = 0; i < arr.length; i++) {
        let itemArr = arr[i].split(',')
        const itemResultArr: any[] = []
        for (let i = 0; i < itemArr.length; i++) {
          if (itemArr[i].startsWith('#')) {
            itemResultArr.push(getColorStrFromHexStr(itemArr[i]))
          } else {
            itemResultArr.push(itemArr[i])
          }
        }
        resultArr.push(itemResultArr.join(' '))
      }
      return { 'box-shadow': `${resultArr.join(',')}}`, }
    },],
  ],
  presets: [
    presetUno(),
    presetAttributify({
      ignoreAttributes: [
        'container',
      ]
    }),
    presetIcons({
      scale: 1.2,
      autoInstall: true,
    }),
    presetTypography(),
  ],
  postprocess: util => {
    util.entries.forEach(i => {
      const value = i[1]
      if (value && typeof value === 'string' && remRE.test(value))
        i[1] = value.replace(remRE, (_, p1) => `${p1 * remFactor}rem`)
    })
  },
  transformers: [
    transformerDirectives({
      // the defaults
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
      // or disable with:
      // applyVariable: false
    }),
    transformerVariantGroup(),
  ],
  blocklist: [
    'container',
    'border',
  ],
})
