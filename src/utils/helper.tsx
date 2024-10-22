import NoPriorityIcon from '../assets/No-priority.svg'; // Adjust the path as necessary
import LowIcon from '../assets/Img - Low Priority.svg';
import MediumIcon from '../assets/Img - Medium Priority.svg';
import HighIcon from '../assets/Img - High Priority.svg';
import UrgentIcon from '../assets/SVG - Urgent Priority colour.svg';
import BacklogIcon from '../assets/Backlog.svg';
import TodoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import DoneIcon from '../assets/Done.svg';
import CanceledIcon from '../assets/Cancelled.svg';

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} alt="No Priority" width={14} height={14} />;
        case "Low": return <img src={LowIcon} alt="Low Priority" width={14} height={14} />;
        case "Medium": return <img src={MediumIcon} alt="Medium Priority" width={14} height={14} />;
        case "High": return <img src={HighIcon} alt="High Priority" width={14} height={14} />;
        case "Urgent": return <img src={UrgentIcon} alt="Urgent Priority" width={14} height={14} />;
        default: return <img src={UrgentIcon} alt="Urgent Priority" width={14} height={14} />;
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={BacklogIcon} alt="Backlog" width={13} height={13} />;
        case "Todo": return <img src={TodoIcon} alt="Todo" width={13} height={13} />;
        case "In progress": return <img src={InProgressIcon} alt="In Progress" width={13} height={13} />;
        case "Done": return <img src={DoneIcon} alt="Done" width={13} height={13} />;
        case "Canceled": return <img src={CanceledIcon} alt="Canceled" width={13} height={13} />;
        default: return <img src={CanceledIcon} alt="Canceled" width={13} height={13} />;
    }
}
