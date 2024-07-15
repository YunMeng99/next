import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}
/**
 * @api Card
 */
export interface CardProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的上的图片 / 视频
     * @en Media content
     */
    media?: React.ReactNode;

    /**
     * 卡片的标题
     * @en Title of card
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     * @en Sub title of card
     */
    subTitle?: React.ReactNode;

    /**
     * 卡片操作组，位置在卡片底部
     * @en Actions of card
     */
    actions?: React.ReactNode;

    /**
     * 是否显示标题的项目符号
     * @en If show title bullet
     * @defaultValue 'true'
     */
    showTitleBullet?: boolean;

    /**
     * 是否展示头部的分隔线
     * @en If show head divider
     * @defaultValue 'true'
     */
    showHeadDivider?: boolean;

    /**
     * 内容区域的固定高度
     * @en Height of content
     * @defaultValue '120'
     */
    contentHeight?: string | number;

    /**
     * 标题区域的用户自定义内容
     * @en Extra of card header
     */
    extra?: React.ReactNode;

    /**
     * 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效
     * @en Whether to open free mode, if opened, can`t set title subTitle ..., must use Card.Header Card.Content ... to set Card
     */
    free?: boolean;
    /**
     * 是否带边框  @version 1.24
     * @en without border @version 1.24
     */
    hasBorder?: boolean;
    dir?: string;
}
/**
 * @api Card.Media
 */
export interface CardMediaProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: React.ElementType;
    /**
     * 背景图片地址
     * @en Media background image
     */
    image?: string;
    /**
     * 媒体源文件地址
     * @en Media source URL
     */
    src?: string;
}
/**
 * @api Card.Header
 */
export interface CardHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的标题
     * @en Title of card
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     * @en Sub Title of Card
     */
    subTitle?: React.ReactNode;

    /**
     * 标题区域的用户自定义内容
     * @en Extra of card header
     */
    extra?: React.ReactNode;

    /**
     * 设置标签类型
     * @en The html tag to be rendered
     *  @defaultValue 'div'
     */
    component?: React.ElementType;
}
/**
 * @api Card.Content
 */
export interface CardContentProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: React.ElementType;
}
/**
 * @api Card.Divider
 */
export interface CardDividerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'hr'
     */
    component?: React.ElementType;

    /**
     * 分割线是否向内缩进
     * @en inset
     */
    inset?: boolean;
}
/**
 * @api Card.Actions
 */
export interface CardActionsProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: React.ElementType;
}

export interface CardBulletHeaderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 卡片的标题
     */
    title?: React.ReactNode;

    /**
     * 卡片的副标题
     */
    subTitle?: React.ReactNode;
    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet?: boolean;
    /**
     * 标题区域的用户自定义内容
     */
    extra?: React.ReactNode;
}

export interface CardCollaspeContentProps extends HTMLAttributesWeak, CommonProps {
    contentHeight?: string | number;
}
export interface CardCollapseContentProps extends HTMLAttributesWeak, CommonProps {
    contentHeight?: string | number;
}
