/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

#include <perspective/first.h>
#include <perspective/base.h>
#include <perspective/pyutils.h>

namespace perspective {

#ifdef PSP_PARALLEL_FOR
PerspectiveReadLock::PerspectiveReadLock(boost::shared_mutex* lock)
    : m_thread_state(PyEval_SaveThread())
    , m_shared_lock(boost::shared_lock<boost::shared_mutex>(*lock)) {}

PerspectiveWriteLock::PerspectiveWriteLock(boost::shared_mutex* lock)
    : m_thread_state(PyEval_SaveThread())
    , m_unique_lock(boost::unique_lock<boost::shared_mutex>(*lock)) {}

PerspectiveReadLock::~PerspectiveReadLock() {
    PyEval_RestoreThread(m_thread_state);
}

PerspectiveWriteLock::~PerspectiveWriteLock() {
    PyEval_RestoreThread(m_thread_state);
}

#endif

} // end namespace perspective
