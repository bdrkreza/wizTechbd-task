import { AiOutlinePieChart } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { MdGridView } from "react-icons/md"
export const navigation = [
    { name: 'Dashboard', href: '/dashboard', icons:<MdGridView/>, current: true },
    { name: 'Doctor', href: 'doctor',icons:<FiUsers/>, current: false },
    { name: 'Listing', href: 'listing',icons:<AiOutlinePieChart/>, current: false },
  ]