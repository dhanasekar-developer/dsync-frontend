export interface ChatInterface {
    chat_id: string,
    chat_type: ChatType,
    name: string,
    email: string,
    image?: string,
    last_message_type?: string,
    last_message_text?: string,
    last_message_at?: number,
}

export interface LoginInterface {
    email: string,
    password: string,
}

export interface SignUpInterface extends LoginInterface {
    name: string,
}

export interface SenderInterface {
    id: number,
    name: string,
}

export interface MessagesInterface {
    id: string,
    message_text: string,
    message_type?: 'text' | 'image' | 'video' | 'audio',
    sender_id: string,
    reply_to?: boolean,
    created_at: string,
    status?: 'sending' | 'sent' | 'failed'
}

export interface UserChatInterface {
    sender: SenderInterface,
    messages: MessagesInterface[]
}

export type UserChatType = UserChatInterface | null

export interface LoginResponse {
    access_token: string,
    refresh_token: string,
    token_type: string,
    message?: string,
}

export interface ProfileUpdateInterface {
    name: string,
    email: string,
    image?: string, 
}

export interface UserInterface extends ProfileUpdateInterface {
    user_id: string,
}

export interface SendMessageInterface {
    from: string,
    to: string,
    message_text: string,
}

export interface RefreshResponse {
    access_token: string
}

export type ChatType = 'group' | 'private' 

export interface CreateChat {
    chat_type: ChatType,
    users_list: string[]
}

export interface ChatParticipantResponse{
    id: string
    chat_id: string
    user_id: string
    user_name: string
    last_delivered_message_id?: string,
    last_delivered_at?: string,
    last_read_message_id?: string,
    last_read_at?: string,
}

export type LocalMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | null

export interface ParticipantMessageStatus {
    user_id: string,
    user_name: string,
    status?: LocalMessageStatus
}

export interface PasswordChange {
    current_password: string,
    new_password: string,
}