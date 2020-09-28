import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import clsx from 'clsx';
import React from 'react';
import { useDropzone } from 'react-dropzone'
import { MUIFileInput } from 'react-forms'

export interface IMUIDropFile {
	onDropFile: (files: any) => void
	multiple?: boolean
	activeClass?: string
	inactiveClass?: string
	defaultClass?: string
}

export const MUIDropFile: React.FC<IMUIDropFile> = (props: IMUIDropFile) => {
	const classes = useStyles()
	const { onDropFile, multiple = true, defaultClass = classes.defaultClass, inactiveClass = classes.inactiveClass, activeClass = classes.activeClass } = props
	const onDrop = React.useCallback(onDropFile, [])
	const { isDragActive, getRootProps, getInputProps } = useDropzone({ onDrop })
	return (
		<Box {...getRootProps()} border="0px dashed grey" className={clsx(defaultClass, isDragActive ? activeClass : inactiveClass)}
			display="flex" alignItems="center" justifyContent="center" >
			<MUIFileInput invisible multiple={multiple} inputProps={{ ...getInputProps() }} />
		</Box>
	)
}

const useStyles = makeStyles<Theme>(() => createStyles({
	defaultClass: { border: '1px dashed grey', borderRadius: 8, width: 900, height: 300 },
	inactiveClass: { background: 'lightgrey' },
	activeClass: { backgroundColor: 'transparent' }
}))
