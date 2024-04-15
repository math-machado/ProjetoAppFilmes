import { Container, Title, MenuButton } from "./styles"
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

export default function Header({title}){

    const navigation = useNavigation();

    return(
        <Container>
            <MenuButton onPress={ () => navigation.openDrawer()} >
                <Feather name="menu" size={36} color="#fff"/>
            </MenuButton>

            <Title>{title}</Title>

        </Container>
    )
}