import { User } from "../model/User"
import { CardList } from "./CardList"
import AvatarCard from "./AvatarCard";
import { UserStore } from "../stores/UserStore";
import { observer } from "mobx-react-lite";

interface UserCardListProps {
    store:UserStore;

}
export const UserCardList = observer((props: UserCardListProps) => {
    const { searchTerm,
        onSearch,
        newAvatarUrl,
        onAvatarChange,
        newUserName,
        onUserNameChange,
        onAddUser,
        filteredItems:items,
        onDelete
    
      } = props.store;
    return (
        <div>
            <input placeholder='Search..' value={searchTerm} onChange={onSearch} />
            <div>
                <input placeholder='Avatar Url' value={newAvatarUrl} onChange={onAvatarChange} />
                <input placeholder='User Name' value={newUserName} onChange={onUserNameChange} />
                <button onClick={onAddUser}>Add</button>
            </div>
            <CardList
                items={items}
                itemRenderel={(item: User) => (
                    <AvatarCard
                        item={{ id: item.id, title: item.username, avatar: item.avatar }}
                        onDelete={onDelete}
                        key={item.username}
                    />
                )}
            />
        </div>

    )

})