import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileSimple(props) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              `https://i.pravatar.cc/200?u=${props.user.name}`
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {props.user.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {props.user.email}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'orange'}
              color={'black'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'black',
                color: 'orange'
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }

// import {
//   Heading,
//   Avatar,
//   Box,
//   Center,
//   Image,
//   Flex,
//   Text,
//   Stack,
//   Button,
//   useColorModeValue,
// } from "@chakra-ui/react";

// export default function SocialProfileWithImage(props) {
//   return (
//     <Center py={6}>
//       <Box
//         // maxW={"270px"}
//         w={"320px"}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow={"2xl"}
//         rounded={"md"}
//         overflow={"hidden"}
//       >
//         <Image
//           h={"120px"}
//           w={"full"}
//           src={`https://picsum.photos/seed/${props.user.name}/200/200`}
//           objectFit={"cover"}
//         />
//         <Flex justify={"center"} mt={-12}>
//           <Avatar
//             size={"xl"}
//             src={`https://i.pravatar.cc/200?u=${props.user.name}`}
//             alt={"Author"}
//             css={{
//               border: "2px solid white",
//             }}
//           />
//         </Flex>

//         <Box p={6}>
//           <Stack spacing={0} align={"center"} mb={5}>
//             <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
//               {props.user.name}
//             </Heading>
//             <Text color={"gray.500"}>Frontend Developer</Text>
//           </Stack>

//           <Stack direction={"row"} justify={"center"} spacing={6}>
//             <Stack spacing={0} align={"center"}>
//               <Text fontWeight={600}>23k</Text>
//               <Text fontSize={"sm"} color={"gray.500"}>
//                 Followers
//               </Text>
//             </Stack>
//             <Stack spacing={0} align={"center"}>
//               <Text fontWeight={600}>23k</Text>
//               <Text fontSize={"sm"} color={"gray.500"}>
//                 Followers
//               </Text>
//             </Stack>
//           </Stack>

//           <Button
//             w={"full"}
//             mt={8}
//             bg={"orange"}
//             color={"black"}
//             rounded={"md"}
//             _active={{
//               bg: "black",
//               color: "orange",
//             }}
//             _hover={{
//               transform: "translateY(-2px)",
//               boxShadow: "lg",
//             }}
//           >
//             Follow
//           </Button>
//         </Box>
//       </Box>
//     </Center>
//   );
// }
