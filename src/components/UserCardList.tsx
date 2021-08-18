import { User } from "../model/User"
import { CardList } from "./CardList"
import AvatarCard from "./AvatarCard";
import { UserStore } from "../stores/UserStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

interface UserCardListProps {
    store: UserStore;

}
export const UserCardList = observer((props: UserCardListProps) => {
    const { searchTerm,
        onSearch,
        newAvatarUrl,
        onAvatarChange,
        newUserName,
        onUserNameChange,
        onAddUser,
        filteredItems: items,
        onDelete,
        // onEdit

    } = props.store;
    const [showAddTask, setShowAddTask] = useState(false);
    return (
        <div>
            <div className='bodyHeader'>
                <input className='searchBar' placeholder='Search..' value={searchTerm} onChange={onSearch} />


                <button className="showHideTask" onClick={() => setShowAddTask(!showAddTask)}>Add task</button>

                {showAddTask && <div>
                    <input placeholder='Avatar Url' value={newAvatarUrl} onChange={onAvatarChange} />
                    <input placeholder='User Name' value={newUserName} onChange={onUserNameChange} />
                    <button onClick={onAddUser}>Add</button>
                </div>
                }

            </div>

            <CardList
                items={items}
                itemRenderel={(item: User) => (
                    <AvatarCard
                        item={{ id: item.id, title: item.username, avatar: item.avatar }}
                        onDelete={onDelete}
                        // onEdit={onEdit}
                        key={item.username}
                    />
                )}
            />
        </div>

    )

})