import { useState, type ReactNode } from "react";
import { AutoComplete, ConfigProvider, Input } from "antd";
import { CircleX, Search } from "lucide-react";
import { Spin } from "antd";
import type { CreateChat, UserInterface } from "./interfaces";
import { useLazyFetchUsersQuery } from "../store/services/userApi";
import { useCreateChatMutation } from "../store/services/chatApi";
import { errorToastHandler } from "../utils/toastHandler";
import { Avatar } from "../utils/getAvatar";

interface Options {
    value: string,
    label: ReactNode
}


export default function SearchBox() {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState<Options[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [ fetchUsers ] = useLazyFetchUsersQuery()
    const [ createChat ] = useCreateChatMutation()


    const makeUsersList = (users: UserInterface[]) => {
        return users?.map((e) => ({
            value: e.user_id,
            label: (
                <div className="flex items-center gap-3 py-2 font-sn-pro">
                    <Avatar name={e.name} image={e.image} className="size-8!" />
                    {/* <img
                        src={e.image}
                        alt=""
                        className="w-8 h-8 rounded-full"
                    /> */}
                    <div>
                        <div className="font-medium capitalize">{e.name}</div>
                        <div className="text-xs text-gray-500">
                            {e.email}
                        </div>
                    </div>
                </div>
            )
        }))
    }

    const handleFetchUsers = async (searchText: string) => {
        if (!searchText.trim()) {
            setOptions(null);
            return;
        }

        try {
            setLoading(true);

            const result = await fetchUsers({ search: searchText.trim() }).unwrap()

            const users = makeUsersList(result)

            setOptions(users);
        }
        catch (error) {
            errorToastHandler(error)
            setOptions(null);
        }
        finally {
            setLoading(false);
        }
    };

    const handleChange = (text: string) => {
        setValue(text);
        handleFetchUsers(text);
    };

    const handleCreateChat = async (user_id: string) => {

        const payload: CreateChat = {
            chat_type: 'private',
            users_list: [user_id]
        }

        await createChat(payload).unwrap()

        setValue("");
        setOptions([]);
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#cccccc",
                    controlOutline: "rgba(191,191,191,0.2)",
                },
            }}
        >
            <AutoComplete
                value={value}
                options={options ?? undefined}
                style={{ width: 400 }}
                onChange={handleChange}
                onSelect={(selectedValue) => { handleCreateChat(selectedValue) }}
                allowClear={{
                    clearIcon: (
                        <CircleX
                            size={18}
                            className="text-gray-400/60"
                        />
                    ),
                }}
            >
                <Input
                    size="large"
                    placeholder="Search user..."
                    prefix={
                        loading ? (
                            <Spin size="small" />
                        ) : (
                            <Search size={18} className="text-gray-300" />
                        )
                    }
                />
            </AutoComplete>
        </ConfigProvider>
    );
}