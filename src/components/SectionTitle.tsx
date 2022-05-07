import './SectionTitle.scss'
import React from 'react';
import classNames from 'classnames';

type SectionTitleProps = {
    className?: string
    children?: React.ReactNode
}

const SectionTitle = ({className, children}: SectionTitleProps) => {
    return <h2 className={classNames('section-title', className)}>{children}</h2>
}

export default SectionTitle