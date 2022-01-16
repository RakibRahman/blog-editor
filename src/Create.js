import React, { useState, useEffect } from 'react'
import {
    Box, Flex, Button, Textarea, Modal, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Text
} from '@chakra-ui/react';
import './create.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from 'html-to-draftjs';

import { EditorState, convertToRaw, convertFromRaw, ContentState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import { FaArtstation } from "react-icons/fa";
import ImgIcon from './img-icon.png';
export const Create = () => {
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

    const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };

    const mentions = [
        { text: 'APPLE', value: 'apple', url: 'facebook.com' },
        { text: 'BANANA', value: 'banana', url: 'banana' },
        { text: 'CHERRY', value: 'cherry', url: 'cherry' },
        { text: 'DURIAN', value: 'durian', url: 'durian' },
        { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
        { text: 'FIG', value: 'fig', url: 'fig' },
        { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
        { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
    ];
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    // const convertManager = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    const { isOpen, onOpen, onClose } = useDisclosure();
    const contentStateRaw = convertFromRaw(content);
    const [contentState, setContentState] = useState(contentStateRaw);
    const [rawHTML, setRawHTML] = useState(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    useEffect(() => {
        console.log('Raw Html', rawHTML)

    }, [rawHTML]);

    // useEffect(() => {
    //     console.log('convertManager', convertManager)

    // }, [convertManager]); 
    // preview html
    useEffect(() => {

        console.log('as HTML:', (contentState));
        setContentState(draftToHtml(contentState));

        // onContentStateChange();
    }, [contentState])
    useEffect(() => {
        // console.log('Editor State:')
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    }, [editorState])

    const HTMlPreview = () => <Text className="rdw-option-wrapper" onClick={onOpen}> Preview HTML</Text>;

    const ClearEditorState = () => <Text className="rdw-option-wrapper" onClick={() => setEditorState(EditorState.createEmpty())}> Clear Editor</Text>;


    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>HTML Preview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea
                            colorScheme='red'
                            // isDisabled
                            // resize='horizontal'
                            minHeight='300px'
                            width='100%'
                            defaultValue={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                            // defaultValue={rawHTML}


                            onChange={(e) =>

                                setRawHTML(e.target.value)
                            }
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => {

                            const contentBlock = htmlToDraft(rawHTML);
                            if (contentBlock) {
                                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                                const editorState = EditorState.createWithContent(contentState);
                                setEditorState(editorState);
                            }

                        }}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(editorState) => setEditorState(editorState)}
                toolbar={{
                    image: { icon: ImgIcon }
                }}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: mentions,
                }}
                hashtag={{}}
                toolbarCustomButtons={[<HTMlPreview />, <ClearEditorState />]}
            />


        </Box>
    )
};


