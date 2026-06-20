import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import type { ReactElement } from 'react'


export default function HoverToView({ children, items = [] }: { children: ReactElement, items: MenuProps['items'] }) {
    return (
        <Space vertical>
            <Space wrap>
                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    {children}
                </Dropdown>
            </Space>
        </Space>
    )
}
