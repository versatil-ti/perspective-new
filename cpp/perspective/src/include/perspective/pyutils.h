/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

#pragma once
#include <perspective/first.h>

#ifdef PSP_PARALLEL_FOR
#include <thread>
#include <boost/thread/locks.hpp>
#include <boost/thread/shared_mutex.hpp>
#endif

namespace perspective {

#ifdef PSP_PARALLEL_FOR
class PERSPECTIVE_EXPORT PerspectiveReadLock {
public:
    PerspectiveReadLock(boost::shared_mutex* lock);
    ~PerspectiveReadLock();

private:
    PyThreadState* m_thread_state;
    boost::shared_lock<boost::shared_mutex> m_shared_lock;
};

class PERSPECTIVE_EXPORT PerspectiveWriteLock {
public:
    PerspectiveWriteLock(boost::shared_mutex* lock);
    ~PerspectiveWriteLock();

private:
    PyThreadState* m_thread_state;
    boost::unique_lock<boost::shared_mutex> m_unique_lock;
};

#define PSP_READ_LOCK(X) PerspectiveReadLock _acquire_read_lock(X);
#define PSP_WRITE_LOCK(X) PerspectiveReadLock _acquire_read_lock(X);
#else
#define PSP_READ_LOCK(X)
#define PSP_WRITE_LOCK(X)
#endif

} // namespace perspective
