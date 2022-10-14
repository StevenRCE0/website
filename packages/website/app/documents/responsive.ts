import type { Course } from '.';

export const responsive: Course[] = [
    {
        title: '响应式设计',
        paragraphs: [
            {
                lines: [
                    '响应式设计 (Responsive Design) 涉及为不同的设备设计交互方式。',
                    '具体来说，影响设计的因素包括屏幕大小、比例、像素密度、输入方式、使用场景等。',
                ],
                links: [
                    {
                        name: 'MDN Docs on Responsive Design',
                        source: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
                    },
                ],
            },
        ],
        subsections: [
            {
                title: '针对不同的屏幕规格进行优化',
                paragraphs: [
                    {
                        lines: [
                            '在早期的网页设计中，设计师和开发者们通常会固定页面和元素的大小，或者不考虑屏幕的尺寸；甚至使用预制的图片来达到显示自定义字体、特效的效果。',
                            '这种设计方式会导致在不同尺寸的屏幕上查看时出现糟糕的使用体验。在过小的屏幕上出现溢出的水平/垂直滚动条，在过大的屏幕上出现无意义的页面空白或者过宽的文字段落。这一问题进入到移动端后更被凸显出来，因为移动端的屏幕尺寸更加多样化。',
                            '依赖图片的设计不仅会进一步降低对不同尺寸的适配能力，还会导致在更高的像素密度的屏幕上出现模糊问题。',
                            '为了解决这一问题，业界内产生了响应式网页设计的理念，意在在同一个页面内对不同的屏幕规格进行优化。',
                        ],
                    },
					{
						lines: [
							'通常来说，实现响应式设计的方式有两种：按比例设置可变的布局网格，以及设置多个不同布局。当然，在很多情况下，两种方式是结合使用的。',
						]
					}
                ],
            },
        ],
    },
];
