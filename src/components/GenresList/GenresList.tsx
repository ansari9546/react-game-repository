import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres, { Genere } from "../../hooks/useGeneres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
    onSelectedGenre: (genere: Genere) => void;
    selectedgenre: Genere | null;
}

const GenresList = ({ onSelectedGenre, selectedgenre}: Props ) => {
    const { data, isLoading, error } = useGeneres();

    if (error) return null;

    if (isLoading) return <Spinner></Spinner>
    return (
        <>
        <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
        <List>
            {data.map(genere => <ListItem key={genere.id} paddingY={'5px'}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genere.image_background)} objectFit={'cover'}></Image>
                    <Button whiteSpace={'normal'} textAlign='left' fontWeight={genere.id === selectedgenre?.id ? 'bold' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genere)}>{genere.name}</Button>
                </HStack>
                </ListItem>)}
        </List>
        </>
    );
}

export default GenresList;