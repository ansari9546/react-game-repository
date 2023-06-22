import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres from "../../hooks/useGeneres";
import getCroppedImageUrl from "../../services/image-url";

const GenresList = () => {
    const { data, isLoading, error } = useGeneres();
    
    if (error) return null;

    if (isLoading) return <Spinner></Spinner>
    return (
        <List>
            {data.map(genere => <ListItem key={genere.id} paddingY={'5px'}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genere.image_background)}></Image>
                    <Text fontSize={'lg'}>{genere.name}</Text>
                </HStack>
                </ListItem>)}
        </List>
    );
}

export default GenresList;